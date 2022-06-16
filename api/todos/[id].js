const enclosedHandler = (request,response) => {

    const {id} = request.query

    response.status(200).send(`hello from id handler: ${id}`)
}

export default enclosedHandler