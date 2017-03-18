import React, {PropTypes} from 'react';
import FilterConfigControlls from './FilterConfigControlls';
import FilterComponent from './FilterComponent';
import HelpForFilterComponent from './Layout/HelpForFilterComponent';

class FindAllFilterComponent extends FilterComponent {

    render() {
        return (
            <div className="FilterConfig FindAllFilterConfig">
                <div className="FilterConfig__Header">
                    Find all matches
                    <div className="btn-group pull-right">
                        <FilterConfigControlls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick}/>
                    </div>
                </div>
                <div className={this.props.enabled ? 'FilterConfig__Contents' : 'FilterConfig__Contents FilterConfig__Contents--Hidden'}>
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Find all matches {/* FIXME implement (Found: 0)*/}</label>
                                <input type="text" ref={input => this.firstInput = input} className="form-control input-sm" placeholder="regular expression" value={this.props.searchString} onChange={(event) => {
                                    this.props.onSearchStringChange(event.target.value);
                                }}/>
                                <p className="FilterConfig__Contents__RegexpErrors FilterConfig__Contents__RegexpErrors--Hidden"/>
                            </div>
                            <div className="form-group form-inline">
                                <div className="checkbox FilterConfig__Contents__Checkbox">
                                    <label className="FilterConfig__Contents__Checkbox__Label">
                                        <input type="checkbox" checked={this.props.caseInsensitive} onChange={this.props.onCaseInsensitiveChange}/>
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
                                <input type="text" className="form-control input-sm" value={this.props.description} onChange={(event) => {
                                    this.props.onDescriptionChange(event.target.value);
                                }}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

FindAllFilterComponent.propTypes = {
    searchString: PropTypes.string.isRequired,
    caseInsensitive: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    //
    enabled: PropTypes.bool.isRequired,
    //
    //
    //
    onSearchStringChange: PropTypes.func.isRequired,
    onCaseInsensitiveChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    //
    onEnabledClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default FindAllFilterComponent;
