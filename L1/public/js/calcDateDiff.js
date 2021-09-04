

export default function calcDateDiff(dateFromString, dateToString) {
    if (dateFromString < dateToString) {
        [dateFromString, dateToString] = [dateToString, dateFromString];
    }

    const dateFrom = luxon.DateTime.fromISO(dateFromString);
    const dateTo = luxon.DateTime.fromISO(dateToString);

    const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject()
    return diff;
}