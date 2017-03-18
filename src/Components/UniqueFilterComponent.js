import React, {PropTypes} from 'react';
import FilterConfigControlls from './FilterConfigControlls';
import FilterComponent from './FilterComponent';
import UniqueFilterConfig from '../RegexpFlow/FilterConfig/UniqueFilterConfig';

class UniqueFilterComponent extends FilterComponent {

    render() {
        return (
            <div className="FilterConfig FindAllFilterConfig">
                <div className="FilterConfig__Header">
                    Unique
                    <div className="btn-group pull-right">
                        <FilterConfigControlls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick}/>
                    </div>
                </div>
                <div className={this.props.enabled ? 'FilterConfig__Contents' : 'FilterConfig__Contents FilterConfig__Contents--Hidden'}>
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Show just unique lines {/* FIXME implement (showing 0 of 0 lines) */}</label>
                            </div>
                            <div className="form-group form-inline">

                                <div className="checkbox FilterConfig__Contents__Checkbox">
                                    <label className="FilterConfig__Contents__Checkbox__Label">
                                        <input type="checkbox" checked={this.props.addCounter} onChange={this.props.onAddCounterChange} ref={input => this.firstCheckbox = input}/>
                                        Add counter
                                    </label>
                                </div>

                                <div className="FilterConfig__Contents__Select">
                                    <label className="FilterConfig__Contents__Checkbox__Label">Separator: </label>
                                    <select className="form-control input-sm" disabled={!this.props.addCounter} value={this.props.counterSeparator} onChange={(event) => {
                                        this.props.counterSeparatorChange(event.target.value);
                                    }}>
                                        <option value={UniqueFilterConfig.COUNTER_SEPARATOR_TAB}>TAB</option>
                                        <option value={UniqueFilterConfig.COUNTER_SEPARATOR_SEMICOLON}>;</option>
                                        <option value={UniqueFilterConfig.COUNTER_SEPARATOR_COMMA}>,</option>
                                        <option value={UniqueFilterConfig.COUNTER_SEPARATOR_SPACE}>(space)</option>
                                    </select>
                                </div>
                            </div>

                        </fieldset>
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

UniqueFilterComponent.propTypes = {
    description: PropTypes.string.isRequired,
    addCounter: PropTypes.bool.isRequired,
    counterSeparator: PropTypes.string.isRequired,
    //
    enabled: PropTypes.bool.isRequired,
    //
    //
    //
    onAddCounterChange: PropTypes.func.isRequired,
    counterSeparatorChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    //
    onEnabledClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default UniqueFilterComponent;
