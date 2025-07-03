/**
 * This file contains the tests4ts interfaces.
 *
 *
 * Copyright 2025 Adligo Inc / Scott Morgan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This is for the equals and notEquals logic, so we can have a
 * I_ComparisionNode result for equals to see where something was notEquals
 * without throwing a exception.  I'm trying to seperate concerns here
 * so the notEquals logic can use the equals logic in an elegant mannor.
 */
export enum ComparisionNodeType {
  Array,
  Map,
  Object,
  /**
   * includes boolean, undefined, null, NaN, number and string
   */
  Primitive,
  Set
}

export enum ComparisonNodeInfoType {
  /**
   * Indicates a I_ComparisionArrayInfo
   */
  Array,
  /**
   * Indicates a I_ComparisionCollectionSizeInfo
   */
  CollectionSize,
  /**
   * Indicates a I_ComparisionEqualInfo
   */
  Equal,
  /**
   * Indicates a I_ComparisionMapValueInfo
   */
  MapValue, 
  /**
   * Indicates a I_ComparisionSetInfo
   */
  Set,
  /**
   * Indicates a I_ComparisionTypeInfo
   */
  Type
}

export function toComparisonNodeInfoTypeLabel(type: ComparisonNodeInfoType): string {
  switch(type) {
    case ComparisonNodeInfoType.Array: return "Array";
    case ComparisonNodeInfoType.CollectionSize: return "CollectionSize";
    case ComparisonNodeInfoType.Equal: return "Equal";
    case ComparisonNodeInfoType.MapValue: return "MapValue";
    case ComparisonNodeInfoType.Set: return "Set";
    case ComparisonNodeInfoType.Type: return "Type";
  }
}

export enum TrialType {
  ApiTrial,
  DataTrial,
  SourceFileTrial,
  UseCaseTrial
}

export function toTrialTypeLabel(type: TrialType): string {
  switch(type) {
    case TrialType.ApiTrial: return "ApiTrial";
    case TrialType.DataTrial: return "DataTrial";
    case TrialType.SourceFileTrial: return "SourceFileTrial";
    case TrialType.UseCaseTrial: return "UseCaseTrial";
  }
}

export enum TypeName {
  Array,
  Boolean,
  I_String,
  Map,
  NaN,
  Number,
  Null,
  Object, 
  Set, 
  String,
  Undefined 
}

export function toTypeNameLabel(type: TypeName): string {
  switch(type) {
    case TypeName.Array: return "Array";
    case TypeName.Boolean: return "Boolean";
    case TypeName.I_String: return "I_String";
    case TypeName.Map: return "Map";
    case TypeName.NaN: return "NaN";
    case TypeName.Number: return "Number";
    case TypeName.Null: return "Null";
    case TypeName.Object: return "Object";
    case TypeName.Set: return "Set";
    case TypeName.String: return "String";
    case TypeName.Undefined: return "Undefined";
  }
}