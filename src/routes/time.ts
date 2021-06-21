import moment from 'moment'

export async function get() {
    return {
        body: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
}