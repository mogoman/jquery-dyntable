jquery-dyntable
===============

Small plugin to dynamically generate a drop-down to show and hide columns on a table.

Thanks to bradvin / FooTable for some ideas on how to access TH elements.


Requirements
============
- jquery >= 1.8.x
- twitter bootstrap (generated elements use Twitter Bootstrap for styling)


Usage
=====
1. Give the table an ID example "table1"
2. To the <thead><th> add data-content="" data-desc="" for each column that must be automatically filtered. The data-content is used to "tag" the field and the data-desc is used as the column name in the drop-down list. 

Example:

    <thead>
        <tr>
            <th data-content="id" data-desc="ID">ID</th>
            <th data-content="firstname" data-desc="First Name">Person name</th>
            <th>Last Name</th><!-- this column cannot be hidden, so leave data-content and data-desc off -->
        </tr>
    </thead>


3. to head <tbody><td> add the same data-content attribute as in the header

Example:

    <tbody>
        <tr>
            <td data-content="id">1</td>
            <td data-content="firstname">Mac</td>
            <td>McMillan</td>
        </tr>
        <tr>
            <td data-content="id">2</td>
            <td data-content="firstname">Sam</td>
            <td>Scott</td>
        </tr>
        <tr>
            <td data-content="id">3</td>
            <td data-content="firstname">Jim</td>
            <td>Jones</td>
        </tr>
    </tbody>

4. Include the JS and set the table up:

    $('#table1').dyntable({ 'ajaxUrl': '/ajax/form/post/path/' });
