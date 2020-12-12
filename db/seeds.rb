questions = [
  { body: 'If you could invite anyone in the world to dinner, who would it be?' },
  { body: 'Would you like to be famous? In what way?' },
  { body: 'Before making a telephone call, do you ever rehearse what you are going to say? Why?' },
]

questions.each do |question_hash|
  Question.create! question_hash
end
