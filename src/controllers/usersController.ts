async function getAll() {
  return { message: 'All users controller' };
}

async function getById(id: number) {
  return { message: 'getById users controller' };
}

async function update(id: number, newValues: any) {
  return { message: 'update users controller' };
}

async function remove(id: number) {
  return { message: 'delete users controller' };
}

export const usersController = {
  getAll,
  getById,
  update,
  remove,
};
