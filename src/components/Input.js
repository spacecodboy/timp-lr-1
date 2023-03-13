function Input({ setSearch, search }) {
    return (
        <input type="text" placeholder="Введите слово" value={search} onChange={(e) => setSearch(e.target.value)} />
    )
}

export default Input