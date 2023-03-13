const handleSubmit = (setData, search) => {
    if (search !== '') {
        fetch(`https://emoji-api.com/emojis?search=${search}&access_key=2c079f31b6cf34d4014d34d1f0d8a507c1fc0ccf`)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setData(res);
                } else {
                    setData([])
                }
            })
    }
}

function Button({ setData, search }) {
    return (
        <button className='search' onClick={() => handleSubmit(setData, search)}>Поиск</button>
    )
}

export default Button