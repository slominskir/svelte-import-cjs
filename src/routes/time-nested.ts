import moment from '$lib/internal'

export async function get() {
    return {
        body: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
}