import React, { memo } from 'react'
import cx from 'clsx'
import _isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

const Input = ({
	label, hint, placeholder, type, id, name, className, onChange, error, value, disabled, onKeyDown,
}) => {
	const identifier = id || name || type
	const isError = !_isEmpty(error)

	return (
		<div className={className}>
			<div
				className={cx({
					'flex justify-between': label && hint,
				})}
			>
				<label htmlFor={identifier} className='flex text-sm font-medium text-gray-700'>
					{label}
				</label>
			</div>
			<div className='mt-1 relative'>
				<input
					type={type}
					value={value}
					name={name}
					id={identifier}
					onChange={onChange}
					onKeyDown={onKeyDown}
					className={cx('shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 w-full', {
						'border-red-300 text-red-900 placeholder-red-300': isError,
						'cursor-text': disabled,
					})}
					placeholder={placeholder}
					aria-describedby={`${identifier}-optional`}
					disabled={disabled}
				/>
				{isError && (
					<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
						<ExclamationCircleIcon className='h-5 w-5 text-red-500' aria-hidden />
					</div>
				)}
			</div>
			<p className='mt-2 text-sm text-gray-500 whitespace-pre-line' id={`${identifier}-optional`}>{hint}</p>
			{isError && (
				<p className='mt-2 text-sm text-red-600 ' id='email-error'>{error}</p>
			)}
		</div>
	)
}

Input.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number,
	]).isRequired,
	label: PropTypes.string,
	hint: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	onKeyDown: PropTypes.func,
	id: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	error: PropTypes.oneOfType([
		PropTypes.string, PropTypes.bool,
	]),
	name: PropTypes.string,
	disabled: PropTypes.bool,
}

Input.defaultProps = {
	label: '',
	hint: '',
	placeholder: '',
	onChange: () => { },
	onKeyDown: () => { },
	id: '',
	type: '',
	className: '',
	error: null,
	name: '',
	disabled: false,
}

export default memo(Input)
