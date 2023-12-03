class Repo<T extends { id: string }> {
    private items: T[] = [];
    getById(id: string): T | null {
        return this.items.find(i => i.id === id) || null;
    }
    list(): T[] {
        return this.items;
    }
}

export default Repo;
