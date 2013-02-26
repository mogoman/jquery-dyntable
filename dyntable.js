(function( $ ){

    var methods = {
        init : function( options ) {
            var $table = $(this);
            var html = '';
            html += '<form action="' + options.ajaxUrl + '" method="POST">';
            html += '<div class="btn-group pull-right">';
            html += '<button class="btn btn-primary columns">Spalten</button>';
            html += '<button class="btn dropdown-toggle  btn-primary" data-toggle="dropdown"><span class="caret"></span></button>';
            html += '<ul class="dropdown-menu">';
            $table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').each(function() {
                if ($(this).attr('data-desc')) {
                    html += '<li>&nbsp;&nbsp;&nbsp;';
                    html += '<input type="hidden" value="0" name="' + $(this).attr('data-desc') + '">';
                    html += '<input class="table-show-hide" name="';
                    html += $(this).attr('data-desc') + '" type="checkbox"';
                    if (!$(this).attr('data-hide')) {
                        html += ' checked ';
                    }
                    html += 'value="1" /> ';
                    html += $(this).attr('data-content');
                    html += '</li>';
                }
            });
            html += '</ul>';
            html += '</form>';
            html += '</div>';
            html += '<br>';
            $table.before(html);

            $(".columns").bind('click', function() {
                return false;
            });
            $('.table-show-hide').bind('click', function() {
                var $form  = $(this).closest('form');
                var toggle = $(this).attr('name');

                // find the column in the table
                $("#" + $table.attr('id') + " thead tr th").each(function() {
                    var $th = $(this);
                    if ($th.attr('data-desc') == toggle) {
                        if ($th.attr('data-hide') == 'all') {
                            $.ajax({
                                type: "POST",
                                url: $form.attr('action'),
                                data: $form.serialize(),
                                success: function() {
                                    $th.attr('data-hide', 'default');
                                    $("#" + $table.attr('id')).find('[data-desc="' + toggle + '"]').show();
                                }
                            });
                        } else {
                            $.ajax({
                                type: "POST",
                                url: $form.attr('action'),
                                data: $form.serialize(),
                                success: function() {
                                    $th.attr('data-hide', 'all');
                                    $("#" + $table.attr('id')).find('[data-desc="' + toggle + '"]').hide();
                                }
                            });
                        }
                    }
                });
            });
        },
        show : function( ) {
            // IS
        },
        hide : function( ) {
            // GOOD
        },
        update : function( content ) {
            // !!!
        }
    };

    $.fn.dyntable = function( method ) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.dyntable' );
        }

    };

})( jQuery );
