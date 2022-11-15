
import StandardStore from '../qwc2/stores/StandardStore';
import { changeLayerProperty } from '../qwc2/actions/layers';


function refreshLayer() {
    console.log("Refreshing layers...");

    // Get the redux store
    let store = StandardStore.get();

    // Dispatch an action that refreshes
    let state = store.getState();
    state.layers.flat.forEach(layer => {
        // TODO: url needs to take into account host and scheme
        if( layer.visibility && layer.name.toLowerCase().includes("bergauer_traffic_lights_demo") )
        {
            console.log(`Refrehsing ${layer.name}`);

            // We add a ?refresh= parameter with current timestamp to force refresh
            let [url, qs] = layer.url.split("?");
            let params = new URLSearchParams(qs);
            params.set("refresh", Date.now());
            let newUrl = `${url}?${params}`;

            // Dispatch the change to the store
            store.dispatch(changeLayerProperty(layer.uuid, "url", newUrl));
        }
    });
}

console.log("Installing auto-refresher...");
setInterval(refreshLayer, 5000);
