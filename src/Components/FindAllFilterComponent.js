// @flow

import * as React from 'react';

import FilterConfigControls from './FilterConfigControls';
import FilterComponent from './FilterComponent';
import HelpForFilterComponent from './HelpForFilterComponent';

type Props = {
    searchString: string,
    caseInsensitive: boolean,
    matchesCount: number,
    description: string,
    enabled: boolean,
    //
    //
    //
    onSearchStringChange: string => void,
    onCaseInsensitiveChange: () => void,
    onDescriptionChange: string => void,
    //
    onEnabledClick: () => void,
    onDeleteClick: () => void,
};

class FindAllFilterComponent extends FilterComponent<Props> {
    render() {
        return (
            <div className="FilterConfig FindAllFilterConfig">
                <div className="FilterConfig__Header">
                    Find all matches
                    <div className="btn-group pull-right">
                        <FilterConfigControls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick} enabled={this.props.enabled} />
                    </div>
                </div>
                <div className={this.props.enabled ? 'FilterConfig__Contents' : 'FilterConfig__Contents FilterConfig__Contents--Hidden'}>
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Find all matches (found: {this.props.matchesCount})</label>
                                <input
                                    type="text"
                                    ref={input => (this.firstInput = input)}
                                    className="form-control input-sm"
                                    placeholder="regular expression"
                                    value={this.props.searchString}
                                    onChange={event => {
                                        this.props.onSearchStringChange(event.target.value);
                                    }}
                                />
                                <p className="FilterConfig__Contents__RegexpErrors FilterConfig__Contents__RegexpErrors--Hidden" />
                            </div>
                            <div className="form-group form-inline">
                                <div className="checkbox FilterConfig__Contents__Checkbox">
                                    <label className="FilterConfig__Contents__Checkbox__Label">
                                        <input type="checkbox" checked={this.props.caseInsensitive} onChange={this.props.onCaseInsensitiveChange} />
                                        Case Insensitive
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <HelpForFilterComponent showHelp={this.state.showHelp}>
                            <li>returns each match in a separate line</li>
                        </HelpForFilterComponent>

                        <fieldset className={this.state.showDescription ? 'FilterConfig__Contents__Description' : 'FilterConfig__Contents__Description FilterConfig__Contents__Description--Hidden'}>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Description</label>
                                <input
                                    type="text"
                                    className="form-control input-sm"
                                    value={this.props.description}
                                    onChange={event => {
                                        this.props.onDescriptionChange(event.target.value);
                                    }}
                                />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default FindAllFilterComponent;
