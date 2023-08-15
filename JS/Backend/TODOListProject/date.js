const toDay = new Date();

exports.getDate = function () {
   

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    return toDay.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    const options = {
        weekday: "long",
    };

    return toDay.toLocaleDateString("en-US", options);
};