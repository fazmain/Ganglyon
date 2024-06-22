// importQuestions.js
const fs = require('fs');
const db = require('./firebaseAdmin');

const importQuestions = async () => {
  const data = JSON.parse(fs.readFileSync('./pastQ.json', 'utf-8'));
  
  const batch = db.batch();

  data.questions.forEach((question) => {
    const questionRef = db.collection('questions').doc(question.qID);
    batch.set(questionRef, question);
  });

  await batch.commit();
  console.log('Questions imported successfully.');
};

importQuestions().catch(console.error);
