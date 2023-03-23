

// Function to handle "ServerError" (status 500)
function handleServerError(error, req, res) {
    console.error(error.stack);
    res.status(500).send({
        status: 500,
        responseText: 'Sorry, something went wrong.',
    });
}

// Function to handle "page not found" error (status 404)
function handlePageNotFoundError(req, res) {
    res.status(404).send('Page not found.');
}



module.exports = {
    handleServerError,
    handlePageNotFoundError,
};
