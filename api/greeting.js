const handler = (request,response) => {
    
    const name = request.query.name ?? "Stranger"

    const message = `Hello ${name}`

    response.status(200).json({message})
}

export default handler