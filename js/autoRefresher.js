
import StandardStore from '../qwc2/stores/StandardStore';



function refreshLayer() {
    console.log("Refreshing layers...");

    // Get the redux store
    let store = StandardStore.get();
    console.log("store is "+store);
}

console.log("Installing auto-refresher...");
setInterval(refreshLayer, 5000);



