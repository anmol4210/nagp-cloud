
$(document).ready(function () {
    function pair(index, key, text) {

        return "<tr><th scope=row>" + index + "</th><td>" + key + "</td><td>" + text + "</td></tr>";
    }
    function get_data(text) {
        rows = text.split("\n")
        data = ""
        for (index = 0; index < rows.length - 1; index++) {
            key = rows[index].split(" - ")[0]
            value = rows[index].split(" - ")[1]
            data = data + pair(index + 1, key, value)
        }
        // data = "<table class='table'><thead><tr><th>#</th><th>First Name</th><th>Last Name</th></tr></thead><tbody>" + data + "</tbody></table>"
        return data
    }


    $.get("https://nagp-files-information.s3.amazonaws.com/info.txt", function (data, status) {
        $(`#table-body`).html(
            get_data(data)
        )
    });

});