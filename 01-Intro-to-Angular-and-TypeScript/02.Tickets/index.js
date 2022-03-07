function tickets(tickets, orderBy) {
    var result = [];
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var currentTicket = tickets_1[_i];
        var data = currentTicket.split('|');
        var destination = data[0];
        var price = Number(data[1]);
        var status_1 = data[2];
        var ticket = new Ticket(destination, price, status_1);
        result.push(ticket);
    }
    switch (orderBy) {
        case 'destination':
            result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            result.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    console.log(result);
}
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
