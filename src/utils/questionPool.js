const STORAGE_PREFIX = 'mediquiz:pool:'

const shuffleArray = (array) => {
  const result = [...array]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[randomIndex]] = [result[randomIndex], result[index]]
  }
  return result
}

const safeParse = (value) => {
  if (typeof value !== 'string') {
    return null
  }
  try {
    return JSON.parse(value)
  } catch (error) {
    return null
  }
}

export const getQuestionBatch = (moduleId, questions, batchSize = 10) => {
  const totalIds = questions.map((question) => question.id)
  if (totalIds.length === 0) {
    return {
      questions: [],
      metadata: {
        batchSize,
        delivered: 0,
        totalPool: 0,
        cycle: 1
      }
    }
  }

  const storageKey = `${STORAGE_PREFIX}${moduleId}`

  if (typeof window === 'undefined') {
    const fallbackQuestions = shuffleArray(totalIds).slice(0, batchSize)
    return {
      questions: fallbackQuestions
        .map((id) => questions.find((question) => question.id === id))
        .filter(Boolean),
      metadata: {
        batchSize,
        delivered: Math.min(batchSize, totalIds.length),
        totalPool: totalIds.length,
        cycle: 1
      }
    }
  }

  const stored = safeParse(window.localStorage.getItem(storageKey))
  let queue = Array.isArray(stored?.queue) ? [...stored.queue] : []
  let cycle = Number.isInteger(stored?.cycle) ? stored.cycle : 0

  if (queue.length < batchSize) {
    const refill = shuffleArray(totalIds)
    queue = [...queue, ...refill]
    cycle += 1
  }

  const batchIds = queue.slice(0, batchSize)
  const remainingQueue = queue.slice(batchSize)

  window.localStorage.setItem(
    storageKey,
    JSON.stringify({
      queue: remainingQueue,
      cycle
    })
  )

  const batchQuestions = batchIds
    .map((id) => questions.find((question) => question.id === id))
    .filter(Boolean)

  return {
    questions: batchQuestions,
      metadata: {
        batchSize,
        delivered: batchQuestions.length,
        totalPool: totalIds.length,
        cycle
      }
  }
}
