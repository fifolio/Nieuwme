import { pendingStateTypes } from '@/types/pendingStateTypes'

export default function Pending({ payload }: { payload: pendingStateTypes | undefined }) {
    return (
        <div className={`${payload?.capitalized ? 'capitalize' : ''} m-0 p-0 border-0 flex my-auto`}>
            <img
                src="/src/assets/icons/pending.jpg"
                alt="pending,"
                width="23"
                className="mr-1 mt-[-1px]"
            /> {payload?.message} {payload?.refer}
        </div>
    )
}