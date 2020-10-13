import express from 'express';

import { Database } from './database/database';
import { usersApi } from './application/users';
import { userApi } from './application/users/[id]';
import { userTagsApi } from './application/users/[id]/tags';
import { tagsApi } from './application/tags/[id]';

const PORT = 4040;

const db = new Database('database.sqlite');

const app = express();

app.use(usersApi(db));
app.use(userApi(db));
app.use(userTagsApi(db));
app.use(tagsApi(db));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
