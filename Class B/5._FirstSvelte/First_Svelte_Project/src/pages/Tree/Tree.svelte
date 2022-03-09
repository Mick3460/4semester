<script>
import Apple from "./Apple.svelte";
import Monkee from "./Monkee.svelte";

    const apples = ["🍎","🍏","🍎","🍏","🍎","🍏"];
    const monkey = "🐒"

    function pickApple () {
        apples.pop()
        apples = apples; //We need to update the components, so we are forcing the change in the array here.
    }

</script>
<h2>I'm a tree</h2>
<div id=entireTree>
  <div id="tree">

 <!-- <Apple apple={apples[0]}/> -->

{#each apples as apple}
    <Apple apple={apple}/>
{/each}

<Monkee monkey={monkey}/>
    </div>
    <div id="test">
        <div id="trunk">
        <button style="background-color:darkred"
        on:click={pickApple}>Click me</button> 
        <!-- pickApple isnt called, becasue this has to be a reference (callback). 
            We dont want it to be evaluated when the page is loaded.-->
        </div>
    </div>
</div>






<style>
    #entireTree {
        background-color: aqua;
    }
    #tree {
        background-color: lightgreen;
        width: 500px;
        margin: 0 auto;
    }

    #trunk {
        background-color: brown;
        height: 200px;
        width: 50px;
        margin: 0 auto;

    }
    #test {
        justify-items: center;
    }
    .apple{
        float: left;
    }
</style>


