<script>
    export let childName
    export let isGirl =false
    export let stereotype ="";
    export let handleFamilyMeetingCall;

    import {supermarket} from "../../store/supermarket"

    function eatCandy() {
        supermarket.update(storeValue => {
            if(storeValue.candy > 0) storeValue.candy -= 1;
            return storeValue;
        })
    }
</script>

<div class:girly={isGirl} 
    class={stereotype || "beyond-any-stereotypes"}> <!-- has the class "girly" if isGirl is true!-->
    <h3 on:click|preventDefault={handleFamilyMeetingCall(childName)}  >Hi, i am {childName} and i'm a girl: {isGirl}</h3>
    <div>Pieces of candy in the store: {$supermarket.candy} </div>
    <button on:click={eatCandy} >Eat candy</button>
</div>

<style>
    .girly{
        background-color: blueviolet;
    }
    .black-sheep {
        background-color: black;
        color: white;
    }
    .bright-kid {
        background-color: yellow;
    }
    .beyond-any-stereotypes {
        color: red;
        user-select: none;
    }
</style>

