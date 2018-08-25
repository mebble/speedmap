const table = document.querySelector('.table');
if (!navigator.geolocation) {
    alert('Geolocation not supported by your browser');
} else {
    const state = {
        lat: null,
        long: null,
        downlink: navigator.connection.downlink
    };

    navigator.connection.onchange = e => {
        console.log('Network change!');
        state.downlink = e.target.downlink;
        render(null, state);
    };

    const watchID = navigator.geolocation.watchPosition(pos => {
        console.log('Location change!');
        state.lat = pos.coords.latitude;
        state.long = pos.coords.longitude;
        render(null, state);
    }, (err) => {
        const lastCode = $('tr:last').data('error-type');
        if (lastCode && lastCode === err.code) {
            return;
        }
        render(err);
    }, { timeout: 5000 });
}

function render(err, state) {
    const { lat, long, downlink } = state ? state : {};
    $(table).append(entry(err, lat, long, downlink));
    $(document).scrollTop($(document).height());
}

function entry(err, lat, lng, downlink) {
    let entry;
    if (err) {
        entry = $(`
            <tr>
                <td colspan="3">${err}</td>
            </tr>
        `)
        .addClass('error-entry')
        .data('error-type', err.code);
    } else {
        entry = $(`
            <tr>
                <td>${lat}</td>
                <td>${lng}</td>
                <td>${downlink}</td>
            </tr>
        `);
    }
    return entry;
}
