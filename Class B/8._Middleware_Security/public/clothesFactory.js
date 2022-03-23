
/*  This is a more controlled way of deciding what you want to export into other files.
    If you just call the entire script, all of it is locked in memory and "forced" to be passed along
         - and I might not need it.
    
*/
export const clothes = [ "1","2","3"];

export function shipClothes() {
    return clothes.pop();
}