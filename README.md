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
- Give the table an ID example "table1"
- Add two attributes to each header cell that must be filtered

        data-content="Human readable name of the column"
        data-desc="tag of the column"

Example:

        <thead>
            <tr>
                <th data-content="ID" data-desc="id">ID</th>
                <th data-content="First Name" data-desc="firstname">Person name</th>
                <th>Last Name</th><!-- this column cannot be hidden, so leave data-content and data-desc off -->
            </tr>
        </thead>

- Add the data-desc tag to each cell in the table body

Example:

        <tbody>
            <tr>
                <td data-desc="id">1</td>
                <td data-desc="firstname">Mac</td>
                <td>McMillan</td>
            </tr>
            <tr>
                <td data-desc="id">2</td>
                <td data-desc="firstname">Sam</td>
                <td>Scott</td>
            </tr>
            <tr>
                <td data-desc="id">3</td>
                <td data-desc="firstname">Jim</td>
                <td>Jones</td>
            </tr>
        </tbody>

- Include the JS and set the table up:

        $('#table1').dyntable({ 'ajaxUrl': '/ajax/form/post/path/' });

