import {NumberInputProps, useFormValue} from 'sanity'
import {Stack, Text} from '@sanity/ui'
import {substractMinutesFromDate} from '../../utils/date.helpers'

export function DoorsOpenInput(props: NumberInputProps) {
  const date = useFormValue(['date']) as string | undefined

  return (
    <Stack space={3}>
      {props.renderDefault(props)}

      {typeof props.value === 'number' && date && (
        <Text size={1}>
          Doors open{' '}
          {substractMinutesFromDate(date, props.value).toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </Text>
      )}
    </Stack>
  )
}
