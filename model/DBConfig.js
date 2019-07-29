const db = {
    dev: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: 'C:/Projects/JS/workspace/reservation.sqlite.db'
        }
    }
}

module.exports = db;