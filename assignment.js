
          // extract id 2 , question and answer 2 from the question array
          // extra user(id) value and also  phone number  


const anonymousDetail ={
    id: 2,
    skills: [],
    questions: [
        {
            id: 1,
            question: "How much is my rate",
            answer: "My rate is quite good"
        },
        {
            id: 2,
            question: "When can i deliver",
            answer: "I deliver like hebrew women 😊😂"
        }
    ],
    phone_number: "08094422807",
    user: "8cbf6f38-d5b6-4433-8030-b467cc19e86f",
    digital_skills: null,
    work_type: "",
    verified: false,
    cover_image: "https://res.cloudinary.com/dr6bsrdid/image/upload/v1/media/default.png&quot;",
    summary_of_profile: "Senior Eng.",
    starting_price: 2000,
    about: "based on the input I receive. My training data includes a diverse range of sources up until January 2022, and I am here to assist you",
    nondigital_skills: null,
    display_name: "Brights Dev",
    category: null,
    profile_pics: "https://res.cloudinary.com/dr6bsrdid/image/upload/v1/media/files/images/November_1_p2lrbc&quot;",
    location: "Port Harcourt, Rivers",
    language: "English",
    whatsapp_link: "https://creve.onrender.com/auth/creativeprofile/2&quot;",
    resume_link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox&quot;",
    website_link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox&quot;",
    images: []
}

console.log(anonymousDetail.questions[1].id)
console.log(anonymousDetail.questions[1].question)
console.log(anonymousDetail.questions[1].answer)
// const first=anonymousDetail.questions[1]
// const second=first.id 
// console.log(second)
console.log(anonymousDetail.user)
console.log(anonymousDetail.phone_number)