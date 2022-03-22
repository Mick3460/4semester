<script>
    import Child from '../../components/Child/Child.svelte';
    import Parent from '../../components/Parent/Parent.svelte'

    import {supermarket} from "../../store/supermarket"
    console.log($supermarket) //$ fjerner funktionerne i supermarket objektet, og viser os det inde i objektet? undersøg.
    let parentName = 'Joe';
    let parentName2 = 'Ima Weiner';

    const parents = [
        {
            key:Math.random(),
            name: "Joe mama"
        },
        {   
            key:Math.random(),
            name: "Wilma Fingerdoo"
        }
    ]

    const children = [
        {
            key: Math.random(),
            name: "Child 1"
        },
        {
            key: Math.random(),
            name: "Child 2"
        }
    ]

    function onFamilyMeetingCalled(whoCalled) {
        console.log('Family meeting called i Home.svelte by',whoCalled)
    }

</script>


<h1> This is the home of the Svelte family</h1>

{#each parents as parent (parent.key)} <!-- each(LOOP)  parents(THE ARRAY)  as   parent(EACH OBJECT)   (parent.key) AS UNIQUE IDENTIFIER-->
<Parent handleFamilyMeetingCall={onFamilyMeetingCalled} 
        parentName={parent.name} 
        />
{/each}

<Child handleFamilyMeetingCall={onFamilyMeetingCalled}  childName={children[0].name}  isGirl={true} />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled}  childName={children[1].name}  stereotype="black-sheep" />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled}  childName="BareEtNavn" stereotype="bright-kid" />


<h1>{JSON.stringify($supermarket,null,4)}</h1>