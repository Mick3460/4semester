<script>
    import io from "socket.io-client"

    const socket = io(); //create a socket, no url needed because it's the same origin

    let lastPersonToChangeAColor

    socket.on("changeTheColor", ({data, username}) => {
        //dont do document.. in svelte, but we're doing it here
        document.body.style.backgroundColor = data
        lastPersonToChangeAColor = username
    })

    function changeColor(event) {
        console.log(event.target.value);
        //send color with socket.emit
        socket.emit("colorChanged", {data: event.target.value, username: undefined })
    }
</script>

<input id="inputColor" type="color" on:change={changeColor}>



