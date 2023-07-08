import React from 'react'
import {Container, QuoteText, ParaGraph, QuoteButton} from "./Hero.styled"
import QuotesData from "./QuotesData"
const Hero = () => {
    const [quotes, setQuotes] = React.useState("If you want to live a happy life, tie it to a goal, not to people or things.")
    const [author, setAuthors] = React.useState("Albert Einstein")

    const NewQuote = () => {
        const quoteArray = QuotesData
        const randomQuotes = Math.floor(Math.random() * quoteArray.length)
        setQuotes(quoteArray[randomQuotes].quote)
        setAuthors(quoteArray[randomQuotes].person)
    } 

  return (
    <>
        <Container>
            <QuoteText>{`"${quotes}"`}</QuoteText>
            <ParaGraph>{author}</ParaGraph>
            <QuoteButton onClick={NewQuote}>New Quote</QuoteButton>
            
        </Container>
    </>
  )
}

export default Hero
