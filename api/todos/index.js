const enclosingHandler = (request,response) => {

    const {method} = request

    if(method === "GET") {
        // TODO: find all todos
        return response.status(200).send("handling get /todos")
    }

    if(method === "POST") {
        // TODO: create a new todo from request body
        return response.status(200).send("handling post /todos")
    }

    response.status(405).send()
}

export default enclosingHandler