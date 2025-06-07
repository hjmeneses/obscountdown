const obs = new OBSWebSocket();

const IsConnected = () => !!(obs.socket && obs.socket.readyState === 1);

const HandleError = (message, err) => {
    console.error(`${message}:`, err?.code || 'N/A', err?.message || 'No additional error details');
};

const PerformOBSCall = async (method, params, successMessage) => {
    if (!IsConnected()) {
        return HandleError(`Cannot perform OBS Call ${method}. OBS WebSocket is not connected.`);
    }
    try {
        const response = await obs.call(method, params);
        console.log(successMessage, response);
    } catch (err) {
        HandleError(`Failed to perform OBS call - ${method}`, err);
    }
};

const EnableFilter = async (sourceName, filterName, filterEnabled) => {
    if (!sourceName || !filterName) {
        return HandleError('Source name and filter name are required');
    }
    await PerformOBSCall('SetSourceFilterEnabled', {
        sourceName,
        filterName,
        filterEnabled,
    }, `Filter '${filterName}' enabled status set to ${filterEnabled}`);
};

const SetURLBrowserSource = async (inputName, url) => {
    if (!inputName || !url) {
        return HandleError('Input name and URL are required');
    }
    await PerformOBSCall('SetInputSettings', {
        inputName,
        inputSettings: { url },
    }, `Source '${inputName}' URL set to ${url}`);
};

const connectOBS = async () => {
    if (IsConnected()) {
        console.log('Already connected to OBS');
        return;
    }
    try {
        const { obsWebSocketVersion, negotiatedRpcVersion } = await obs.connect(
            'ws://127.0.0.1:4455',
            'h4cBbaWgqURlvXKO',
            { rpcVersion: 1 }
        );
        console.log(`Connected to OBS WebSocket version ${obsWebSocketVersion} (RPC ${negotiatedRpcVersion})`);
    } catch (err) {
        HandleError('Failed to connect to OBS', err);
    }
};

const disconnectOBS = async () => {
    if (IsConnected()) {
        await obs.disconnect();
        console.log('Disconnected from OBS');
    } else {
        console.log('No active OBS WebSocket connection to disconnect.');
    }
};

window.onload = () => {
    connectOBS();
};
