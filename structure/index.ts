import {CalendarIcon, PinIcon, UserIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(
          S.documentList()
            .apiVersion('v2023-08-01')
            .title('Upcoming Events')
            .filter('date > now()'),
        ),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(
          S.documentList().apiVersion('v2023-08-01').title('Past Events').filter('date < now()'),
        ),
      S.divider(),
      S.documentTypeListItem('artist').title('Artists').icon(UserIcon),
      S.documentTypeListItem('venue').title('Venues').icon(PinIcon),
    ])
