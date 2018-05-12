// @flow

export type Example = {
    name: string,
    actions: any[],
};

let examples = [];

examples.push({
    name: 'Find words and convert to JS array',
    actions: [
        { type: 'REGEXP_FLOW_UPDATE_DESCRIPTION', description: 'Find all unique words; convert them to JavaScript array' },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'FindAll', nextId: 1 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '1', searchString: '[a-z]+' },
        { type: 'FILTER_TOGGLE_CASE_INSENSITIVE', id: '1' },

        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'Unique', nextId: 2 },

        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'Replace', nextId: 3 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '3', searchString: '^(.+?)$' },
        { type: 'FILTER_UPDATE_REPLACE_STRING', id: '3', replaceString: "'$1'," },

        {
            type: 'UPDATE_INPUT_TEXT',
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Cras ut pharetra ipsum, in interdum risus. ' +
                'Donec ante mauris, pellentesque condimentum felis sed, dictum pulvinar elit. ' +
                'Sed nulla metus, sagittis eu elit vel, adipdsdsdiscing interdum risus. ' +
                'Mauris vitae ligula massa. ' +
                'Integer in blandit arcu. ' +
                'Aliquam laoreet justo a lorem pellentesque scelerisque. ' +
                'Curabitur varius et odio ut condimentum. ' +
                'Etiam cursus nunc et porttitor cursus. ' +
                'Nulla blandit hendrerit metus, a auctor magna ullamcorper non. ' +
                'Cras vitae metus tortor. ' +
                'Proin venenatis eros et sem consectetur vehicula. ' +
                'Donec commodo sit amet metus a scelerisque. ' +
                'Sed vitae dapibus lorem. ' +
                'Vestibulum sed varius nisl. ' +
                'Curabitur id lobortis dui.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse egestas ultrices eros et cursus. ' +
                'In quam erat, fermentum in volutpat eu, ornare eget enim. ' +
                'Vivamus eu pharetra sem. ' +
                'Mauris id congue urna. ' +
                'Proin leo augue, pretium eu pulvinar sit amet, placerat eget sapien. ' +
                'Phasellus porta nunc euismod ultricies dignissim. ' +
                'Mauris luctus bibendum vehicula. ' +
                'In hac habitasse platea dictumst. ' +
                'Curabitur posuere ac felis non interdum. ' +
                'Phasellus laoreet id purus id semper. ',
        },
    ],
});

examples.push({
    name: 'Convert Excel to JSON',
    actions: [
        { type: 'REGEXP_FLOW_UPDATE_DESCRIPTION', description: 'Split rows into cells, then convert each row into JSON object' },
        {
            type: 'UPDATE_INPUT_TEXT',
            text: '1	Aaa	2016-10-01	8\n2	Bbb	2016-10-01	16\n3	Ccc	2016-10-02	10\n4	Ddd	2016-10-03	14\n5	Eee	2016-10-05	16\n6	Fff	2016-10-10	11\n7	Ggg	2016-10-12	11\n8	Hhh	2016-10-14	18\n9	Iii	2016-10-20	18\n10	Jjj	2016-10-24	7\n11	Kkk	2016-10-30	17\n',
        },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'Replace', nextId: 1 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '1', searchString: '^(.+?)\\t(.+?)\\t(.+?)\\t(.+?)$' },
        { type: 'FILTER_UPDATE_REPLACE_STRING', id: '1', replaceString: '{"id":$1, "name": "$2", "startedAt": "$3", "total": $4},' },
    ],
});

examples.push({
    name: 'Build JS constants',
    actions: [
        { type: 'REGEXP_FLOW_UPDATE_DESCRIPTION', description: 'Find values inside XML, convert them to JavaScript constant definitions' },
        {
            type: 'UPDATE_INPUT_TEXT',
            text: '<type>FOO</type>\n<type>BAR</type>\n<type>FOOBAR</type>\n<type>LOREM</type>\n<type>IPSUM</type>',
        },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'MatchInLines', nextId: 1 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '1', searchString: '<type>(.+?)</type>' },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'Replace', nextId: 2 },
        { type: 'FILTER_UPDATE_REPLACE_STRING', id: '2', replaceString: 'const $1 = "$1";' },
    ],
});

examples.push({
    name: 'Find dates and convert format',
    actions: [
        { type: 'REGEXP_FLOW_UPDATE_DESCRIPTION', description: 'Find all dates in M-D-Y format, and convert them to Y-M-D format' },
        {
            type: 'UPDATE_INPUT_TEXT',
            text:
                'non id ornare Morbi lacus pretium ultricies dapibus tincidunt lacus finibus sit consequat pellentesque orci rutrum. in. et Sed 07-20-2011 Curabitur ipsum aliquet id hendrerit 04-08-2010 leo nisi. auctor eu sapien Aliquam ligula posuere libero vel 06-07-2011 Donec Quisque odio, eget dapibus nunc varius, efficitur eget dui faucibus mi dolor 05-31-2010 nisi, a sodales justo sodales eros 07-09-2010 ac facilisis. vestibulum. pretium, at id, 02-23-2012 et 07-22-2011 tempor eu, ex. consectetur eu vulputate tempor blandit Donec diam nunc, aliquam arcu lobortis, diam, hendrerit, Duis turpis turpis metus 07-23-2010 a sem. porttitor eget eget 05-10-2011 commodo imperdiet velit sit pretium a in amet vel nunc, 01-06-2011 sed Nulla 08-18-2010 nec Phasellus pellentesque enim. augue magna 10-14-2010 accumsan. justo a Nulla 01-16-2011 at ligula. dignissim Phasellus Mauris In urna. 07-07-2011 Nunc tincidunt Curabitur malesuada 02-20-2012 mollis, quis fringilla, at dui ex. leo a commodo. ac tellus ante magna fames tristique fringilla nisl, euismod suscipit. nec magna nisl. ac vitae condimentum convallis, in, dictum Aenean dolor enim Interdum iaculis Quisque aliquam id purus felis. mauris leo. mi 12-25-2011 ligula. ligula condimentum 09-23-2011 12-19-2010 nec Pellentesque placerat. ac amet, turpis 01-20-2012 vehicula, sit nisi, blandit, quam. id 10-02-2010 Cras malesuada Vivamus amet nunc orci vitae 06-25-2010 orci tristique tempor libero lorem 03-23-2012 bibendum in 02-25-2012 dictum eros. amet Cras mollis. sed. amet, erat at iaculis in, mollis vestibulum in rutrum non mi porttitor augue placerat lacinia arcu, nulla. Fusce facilisis et ex ultricies pharetra adipiscing eros tempus. maximus rhoncus 01-06-2010 maximus sed ipsum 02-20-2011 nulla, augue non erat. purus. 08-24-2011 purus metus. lectus. maximus ut ut Praesent porttitor sit condimentum 11-05-2011 05-07-2010 Lorem ac eget velit ornare, nisl condimentum. 10-09-2011 elit. dui Quisque primis cursus arcu, elementum, ipsum velit justo, ullamcorper et faucibus. malesuada odio. 12-06-2010 Aliquam Aenean feugiat sit turpis nisl amet ac felis, Donec id porta ante Etiam iaculis non sit 03-11-2012 tellus, facilisis 09-13-2010 libero. Maecenas erat. tellus In ut mi est in 03-21-2011 vel at rutrum elementum id Proin ultrices Sed posuere tempor erat. tortor feugiat. 02-06-2012 interdum. velit est arcu vehicula ante. purus nibh nulla Nullam Ut cursus sem 12-18-2010 purus est 08-20-2011 tincidunt tempor placerat 02-21-2010 iaculis dolor placerat felis consequat malesuada, Sed commodo et 04-10-2011 faucibus dignissim quam, non. eget 02-02-2010 at nec. Fusce elit leo. velit eu gravida, turpis aliquet pellentesque ut commodo faucibus. sed efficitur posuere dapibus. diam sagittis, lobortis. et nibh facilisi. massa vulputate amet tortor Nam 05-03-2010 eros. Pellentesque Integer eros. 07-27-2011 aliquam. ipsum commodo nisl ac ut tellus 12-24-2011 sapien fermentum condimentum lectus Vivamus consectetur nisi. non vel, auctor volutpat accumsan 01-15-2010 luctus dapibus Sed Aliquam Donec 03-11-2011 ante, Sed In magna felis. purus interdum Ut vel ultrices et eu malesuada. Mauris volutpat. mi ex, Nulla 02-02-2011 lorem. sit aliquam pharetra placerat 02-26-2010 Morbi Nulla 03-14-2010 11-12-2010 Sed 11-29-2011 09-06-2011 congue in consequat',
        },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'FindAll', nextId: 1 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '1', searchString: '(\\d{2})-(\\d{2})-(\\d{4})' },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'Replace', nextId: 2 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '2', searchString: '(\\d{2})-(\\d{2})-(\\d{4})' },
        { type: 'FILTER_UPDATE_REPLACE_STRING', id: '2', replaceString: '$3-$1-$2' },
    ],
});

examples.push({
    name: 'Revert modified files with git',
    actions: [
        { type: 'REGEXP_FLOW_UPDATE_DESCRIPTION', description: 'Find all modified files matching "percona", revert changes in them with git' },
        {
            type: 'UPDATE_INPUT_TEXT',
            text:
                '	modified:   alternatives/my.cnf\n' +
                '	modified:   apparmor.d/abstractions/dbus-session-strict\n' +
                '	modified:   apparmor.d/abstractions/ibus\n' +
                '	modified:   apparmor.d/cache/sbin.dhclient\n' +
                '	modified:   apparmor.d/cache/usr.sbin.mysqld\n' +
                '	modified:   apparmor.d/cache/usr.sbin.tcpdump\n' +
                '	modified:   apt/apt.conf.d/01autoremove-kernels\n' +
                '	modified:   apt/trusted.gpg\n' +
                '	modified:   console-setup/cached.kmap.gz\n' +
                '	modified:   console-setup/compose.ISO-8859-1.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-13.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-14.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-15.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-2.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-3.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-4.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-7.inc\n' +
                '	modified:   console-setup/compose.ISO-8859-9.inc\n' +
                '	modified:   dovecot/dovecot-dict-auth.conf.ext\n' +
                '	modified:   dovecot/dovecot-dict-sql.conf.ext\n' +
                '	modified:   dovecot/dovecot-sql.conf.ext\n' +
                '	modified:   init.d/.depend.boot\n' +
                '	modified:   init.d/.depend.start\n' +
                '	modified:   init.d/.depend.stop\n' +
                '	modified:   init.d/apparmor\n' +
                '	modified:   init/apparmor.conf\n' +
                '	modified:   issue\n' +
                '	modified:   issue.net\n' +
                '	modified:   ld.so.cache\n' +
                '	deleted:    logcheck/ignore.d.paranoid/mysql-server-5_6\n' +
                '	deleted:    logcheck/ignore.d.server/mysql-server-5_6\n' +
                '	deleted:    logcheck/ignore.d.workstation/mysql-server-5_6\n' +
                '	modified:   lsb-release\n' +
                '	deleted:    mysql/conf.d/my5.6.cnf\n' +
                '	deleted:    mysql/conf.d/mysqld_safe_syslog.cnf\n' +
                '	modified:   mysql/debian-start\n' +
                '	modified:   mysql/debian.cnf\n' +
                '	deleted:    mysql/my.cnf-1\n' +
                '	modified:   mysql/mysql.conf.d/mysqld.cnf\n' +
                '	modified:   network/if-up.d/openssh-server\n' +
                '	deleted:    percona-toolkit/pt-archiver.conf\n' +
                '	deleted:    percona-toolkit/pt-collect.conf\n' +
                '	deleted:    percona-toolkit/pt-config-diff.conf\n' +
                '	deleted:    percona-toolkit/pt-deadlock-logger.conf\n' +
                '	deleted:    percona-toolkit/pt-diskstats.conf\n' +
                '	deleted:    percona-toolkit/pt-duplicate-key-checker.conf\n' +
                '	deleted:    percona-toolkit/pt-fifo-split.conf\n' +
                '	deleted:    percona-toolkit/pt-find.conf\n' +
                '	deleted:    percona-toolkit/pt-fk-error-logger.conf\n' +
                '	deleted:    percona-toolkit/pt-heartbeat.conf\n' +
                '	deleted:    percona-toolkit/pt-index-usage.conf\n' +
                '	deleted:    percona-toolkit/pt-kill.conf\n' +
                '	deleted:    percona-toolkit/pt-log-player.conf\n' +
                '	deleted:    percona-toolkit/pt-mext.conf\n' +
                '	deleted:    percona-toolkit/pt-mysql-summary.conf\n' +
                '	deleted:    percona-toolkit/pt-online-schema-change.conf\n' +
                '	deleted:    percona-toolkit/pt-pmp.conf\n' +
                '	deleted:    percona-toolkit/pt-query-advisor.conf\n' +
                '	deleted:    percona-toolkit/pt-query-digest.conf\n' +
                '	deleted:    percona-toolkit/pt-show-grants.conf\n' +
                '	deleted:    percona-toolkit/pt-sift.conf\n' +
                '	deleted:    percona-toolkit/pt-slave-delay.conf\n' +
                '	deleted:    percona-toolkit/pt-slave-find.conf\n' +
                '	deleted:    percona-toolkit/pt-slave-restart.conf\n' +
                '	deleted:    percona-toolkit/pt-stalk.conf\n' +
                '	deleted:    percona-toolkit/pt-summary.conf\n' +
                '	deleted:    percona-toolkit/pt-table-checksum.conf\n' +
                '	deleted:    percona-toolkit/pt-table-sync.conf\n' +
                '	deleted:    percona-toolkit/pt-tcp-model.conf\n' +
                '	deleted:    percona-toolkit/pt-trend.conf\n' +
                '	deleted:    percona-toolkit/pt-upgrade.conf\n' +
                '	deleted:    percona-toolkit/pt-variable-advisor.conf\n' +
                '	deleted:    percona-toolkit/pt-visual-explain.conf\n' +
                '	deleted:    rcS.d/S04mountdevsubfs.sh\n' +
                '	deleted:    rcS.d/S04procps\n' +
                '	deleted:    rcS.d/S05hwclock.sh\n' +
                '	deleted:    rcS.d/S06checkroot.sh\n' +
                '	deleted:    rcS.d/S07checkfs.sh\n' +
                '	deleted:    rcS.d/S08checkroot-bootclean.sh\n' +
                '	deleted:    rcS.d/S08kmod\n' +
                '	deleted:    rcS.d/S08urandom\n' +
                '	deleted:    rcS.d/S09mountall.sh\n' +
                '	deleted:    rcS.d/S09networking\n' +
                '	deleted:    rcS.d/S10mountall-bootclean.sh\n' +
                '	deleted:    rcS.d/S10mountnfs.sh\n' +
                '	deleted:    rcS.d/S11mountnfs-bootclean.sh\n' +
                '	deleted:    rcS.d/S12bootmisc.sh\n' +
                '	modified:   skel/.profile\n' +
                '	modified:   sudoers\n' +
                '	modified:   systemd/system.conf\n' +
                '	deleted:    systemd/system/mysql.service\n' +
                '	modified:   update-motd.d/10-help-text\n',
        },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'MatchLines', nextId: 1 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '1', searchString: 'deleted' },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'MatchInLines', nextId: 2 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '2', searchString: 'deleted:\\s+(.+?)$' },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'MatchLines', nextId: 3 },
        { type: 'FILTER_UPDATE_SEARCH_STRING', id: '3', searchString: 'percona' },
        { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'Replace', nextId: 4 },
        { type: 'FILTER_UPDATE_REPLACE_STRING', id: '4', replaceString: 'git checkout -- "$1"' },
    ],
});

export default examples;
