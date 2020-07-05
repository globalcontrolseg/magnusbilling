/**
 * Classe que define a lista de "CallSummary"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 17/08/2012
 */
Ext.define('MBilling.view.callSummaryPerTrunk.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.callsummarypertrunklist',
    store: 'CallSummaryPerTrunk',
    initComponent: function() {
        var me = this;
        me.fieldSearch = App.user.isAdmin ? 'idTrunk.trunkcode' : '';
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.allowUpdate = false;
        me.allowDelete = false;
        me.columns = [{
            xtype: 'actioncolumn',
            width: 26,
            sortable: false,
            menuDisabled: true,
            header: t(''),
            dataIndex: 'id',
            items: [{
                iconCls: 'icon-export-csv',
                tooltip: t('Export CSV'),
                handler: 'onExportCsvUser'
            }],
            hidden: !App.user.isAdmin
        }, {
            header: t('Trunk'),
            dataIndex: 'idTrunktrunkcode',
            filter: {
                type: 'string',
                field: 'idTrunk.trunkcode'
            },
            flex: 3
        }, {
            header: t('min_sessiontime'),
            dataIndex: 'sessiontime',
            flex: 2
        }, {
            header: t('aloc_all_calls'),
            dataIndex: 'aloc_all_calls',
            renderer: Helper.Util.formatsecondsToTime,
            flex: 3
        }, {
            header: t('Answered calls'),
            dataIndex: 'nbcall',
            flex: 3
        }, {
            header: t('Failed calls'),
            dataIndex: 'nbcall_fail',
            flex: 3
        }, {
            header: t('buycost'),
            dataIndex: 'buycost',
            renderer: Helper.Util.formatMoneyDecimal,
            flex: 3,
            hidden: App.user.isClient,
            hideable: App.user.isAdmin
        }, {
            header: t('sessionbill'),
            dataIndex: 'sessionbill',
            renderer: Helper.Util.formatMoneyDecimal,
            flex: 3
        }, {
            header: t('markup'),
            dataIndex: 'lucro',
            renderer: Helper.Util.formatMoneyDecimal,
            flex: 3,
            hidden: App.user.isClient,
            hideable: App.user.isAdmin
        }, {
            header: t('ASR'),
            dataIndex: 'asr',
            renderer: Helper.Util.formatPorcente,
            flex: 3,
            hidden: App.user.isClient,
            hideable: App.user.isAdmin
        }]
        me.callParent(arguments);
    }
});