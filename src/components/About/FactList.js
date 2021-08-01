import React from "react"

import Typography from "@material-ui/core/Typography"
import FunFact from "./FunFact"

const facts = [
  {
    title: `Hometown`,
    description: `Irvine, California`,
  },
  {
    title: `Hobbies`,
    description: `Playing guitar and going on hikes!`,
  },
  {
    title: `Languages`,
    description: `Programming languages, but also speaking! I love learning to 
        speak new languages and am currently learning Mandarin and Korean!
        In the future, I plan to also learn Japanese. Also discovered I have a love
        for linguistics and enjoy taking linguistic classes at school. `,
  },
  {
    title: `Teaching`,
    description: `Over the years I have found I absolutely love teaching and have 
        spent much of my free time involving myself in clubs where I can do just
        that. I am the current advisor and former Vice President of 
        <a href='https://hack.uclaacm.com/'>UCLA ACM Hack</a>
        where I have taught <a href='https://github.com/uclaacm/learn.py-s21'>Python</a>, 
        <a href='https://github.com/uclaacm/hackschool-f20'>Web Dev</a>, and 
        <a href='https://github.com/uclaacm/hack-sprint-w20'>Android Mobile Development</a> 
        in some fun workshops. I also used to be a Code Coach at theCoderSchool where 
        I taught young kids how to program in Python, HTML/CSS, and Scratch.`,
  },
  {
    title: `Work Experience`,
    description: `The the 2020 and 2021 summers, I had a wonderful time interning at
        Amazon Web Services on the Wallaby Team (aka 
        <a href='https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html'>AWS Signer</a>). 
        I had an amazing time getting to know my mentor and my manager and couldn't 
        have made it through without them. I also learned a lot about AWS while 
        independently working on my intern project :)`,
  },
]

function FactList() {
  const funFacts = facts.map(o => <FunFact key={o.title} {...o} />)
  return (
    <div>
      <Typography>Some fun facts about me...</Typography>
      {funFacts}
    </div>
  )
}

export default FactList
