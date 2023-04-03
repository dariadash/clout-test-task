import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/en'

dayjs.extend(relativeTime)
dayjs.locale('en')

export const toNormalDate = (date: number) => dayjs(date).format('DD.MM.YY')
export const toNormalTime = (date: number) => dayjs(date).format('HH:mm')