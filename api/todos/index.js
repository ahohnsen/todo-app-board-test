const enclosingHandler = (request,response) => {
    response.status(200).send("hello from index handler")
}

export default enclosingHandler