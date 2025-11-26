import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create a answer', async () => {
    const result = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Conteúdo da resposta',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryAnswersRepository.items).toHaveLength(1)
    expect(inMemoryAnswersRepository.items[0].id).toEqual(
      result.value?.answer.id,
    )
  })
})
