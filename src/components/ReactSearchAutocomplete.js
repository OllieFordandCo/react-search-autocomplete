import React, { useEffect, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import { defaultTheme, defaultFuseOptions } from '../config/config'
import Results from './Results'
import SearchInput from './SearchInput'
import { ThemeProvider } from 'styled-components'
import { debounce } from '../utils/utils'
import styled from 'styled-components'

export const DEFAULT_INPUT_DEBOUNCE = 200
export const MAX_RESULTS = 10

export default function ReactSearchAutocomplete(props) {
  const {
    items,
    fuseOptions,
    inputDebounce,
    onSearch,
    onHover,
    onSelect,
    onFocus,
    onClear,
    showIcon,
    showClear,
    maxResults,
    placeholder,
    autoFocus,
    styling,
    resultStringKeyName,
    inputSearchString,
    formatResult
  } = props

  const theme = { ...defaultTheme, ...styling }
  const options = { ...defaultFuseOptions, ...fuseOptions }

  const fuse = new Fuse(items, options)
  fuse.setCollection(items)

  const [searchString, setSearchString] = useState(inputSearchString)
  const [results, setResults] = useState()
  const [isFocused, setIsFocused] = useState(false)

  const callOnSearch = (keyword) => {
    let newResults = []
    if (keyword?.length >= 0) {
      newResults = fuseResults(keyword)
      setResults(newResults)
      onSearch(keyword, newResults)
    } else {
      setResults(newResults)
    }
  }

  const handleOnSearch = React.useCallback(
    inputDebounce > 0
      ? debounce((keyword) => callOnSearch(keyword), inputDebounce)
      : (keyword) => callOnSearch(keyword),
    [items]
  )

  useLayoutEffect(() => {
    setSearchString(inputSearchString)
  }, [inputSearchString])

  useEffect(() => {
    searchString?.length > 0 && results?.length > 0 && setResults(fuseResults(searchString))
  }, [items])

  const handleOnClick = (result) => {
    setResults([])
    onSelect(result)
  }

  const handleOnFocus = (result) => {
    setIsFocused(true)
  }

  const handleOnBlur = (result) => {
    setResults([])
    setIsFocused(false)
  }

  const fuseResults = (keyword) =>
    fuse
      .search(keyword, { limit: maxResults })
      .map((result) => ({ ...result.item }))
      .slice(0, maxResults)

  const handleSetSearchString = ({ target }) => {
    const keyword = target.value
    setSearchString(keyword)
    handleOnSearch(keyword)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledReactSearchAutocomplete>
        <SearchInput
          searchString={searchString}
          setSearchString={handleSetSearchString}
          autoFocus={autoFocus}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onClear={onClear}
          placeholder={placeholder}
          showIcon={showIcon}
          showClear={showClear}
        />
        <Results
          results={results}
          onClick={handleOnClick}
          onHover={onHover}
          isFocused={isFocused}
          setSearchString={setSearchString}
          showIcon={showIcon}
          maxResults={maxResults}
          resultStringKeyName={resultStringKeyName}
          formatResult={formatResult}
        />
      </StyledReactSearchAutocomplete>
    </ThemeProvider>
  )
}

ReactSearchAutocomplete.defaultProps = {
  items: [],
  fuseOptions: defaultFuseOptions,
  onSearch: () => {
  },
  onHover: () => {
  },
  onSelect: () => {
  },
  onClear: () => {
  },
  inputDebounce: DEFAULT_INPUT_DEBOUNCE,
  showIcon: true,
  showClear: true,
  maxResults: MAX_RESULTS,
  placeholder: '',
  autoFocus: false,
  onFocus: () => {

  },
  styling: {},
  resultStringKeyName: 'name',
  inputSearchString: '',
  formatResult: (val) => val
}

ReactSearchAutocomplete.propTypes = {
  items: PropTypes.array,
  fuseOptions: PropTypes.object,
  inputDebounce: PropTypes.number,
  onSearch: PropTypes.func,
  onHover: PropTypes.func,
  onSelect: PropTypes.func,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  showIcon: PropTypes.bool,
  showClear: PropTypes.bool,
  maxResults: PropTypes.number,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  styling: PropTypes.object,
  resultStringKeyName: PropTypes.string,
  inputSearchString: PropTypes.string,
  formatResult: PropTypes.func
}

const StyledReactSearchAutocomplete = styled.div`
  position: relative;
  width: ${(props) => props.theme.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  z-index: ${(props) => props.theme.zIndex};

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  &:active {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  &:focus-within {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`
