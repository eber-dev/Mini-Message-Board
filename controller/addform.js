export function añadir(messages, message, author) {
    messages.push({
        text: message,
        user: author,
        added: new Date(),
    });
}
