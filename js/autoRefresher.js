
import StandardStore from '../qwc2/stores/StandardStore';
import { changeLayerProperty } from '../qwc2/actions/layers';


let refreshInc = 0;
function refreshLayer() {
    console.log("Refreshing layers...");

    // Get the redux store
    let store = StandardStore.get();

    // Dispatch an action that refreshes
    let state = store.getState();
    state.layers.flat.forEach(layer => {
        // TODO: url needs to take into account host and scheme
        if( layer.url && layer.url.startsWith("http://localhost/webgis/qgis_server_proxy/ogc/") )
        {
            store.dispatch(
                changeLayerProperty(
                    layer.uuid, "url", layer.url + `?refresh=${refreshInc}`
                )
            );
        }
    });

    refreshInc += 0.1;
}

console.log("Installing auto-refresher...");
setInterval(refreshLayer, 5000);
