const enclosedHandler = (request,response) => {

    const {id} = request.query

    const {method} = request

    if(method === "GET") {
        // TODO: find a todo by id
        return response.status(200).json(`handling get /todos/${id} `)
    }

    if(method === "DELETE") {
        // TODO: delete a todo by id
        return response.status(200).json(`handling delete /todos/${id} `)
    }

    if(method === "PUT") {
        // TODO: find and update a todo by id
        return response.status(200).json(`handling put /todos/${id} `)
    }

    if(method === "PATCH") {
        // TODO: find and (partially) update a todo by id
        return response.status(200).json(`handling patch /todos/${id} `)
    }

    response.status(405).send()
}

export default enclosedHandler