<script>

import Sunray from "./Sunray.svelte"

</script>

<div id="outer">
<div id="sun">
    <h1>Shiny shiny</h1>
    
    </div>
    <div id="rays">
    <Sunray />
    <Sunray />
    <Sunray />
    <Sunray />
    </div>
</div>
<style>
    #outer {
        width: 600px;
        height: 300px;
        display: flex;
        justify-content: left;
        position: absolute;         
    }
    #sun {
        background-color: yellow;
        width: 200px;
        height: 200px;
        border-radius: 200px;
        float: left;    
        
    }
    #rays {
        width: 90px;
float: left;
    }
</style>